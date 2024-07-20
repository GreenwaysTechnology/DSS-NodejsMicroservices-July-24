const { ServiceBroker } = require('moleculer')

const middleware1 = {
	localAction(handler) {
		return function mw1(ctx) {
			broker.logger.info(kleur.yellow("      mw1 before", ctx.action.name));
			return handler(ctx).then(res => {
				broker.logger.info(kleur.yellow("      mw1 after", ctx.action.name));
				return res;
			});
		};
	}
};
// Promise example
const middleware2 = {
	localAction(handler) {
		return function mw2(ctx) {
			broker.logger.info(kleur.magenta("  mw2 before-promise", ctx.action.name));
			return new broker.Promise(resolve => {
				setTimeout(() => {
					broker.logger.info(kleur.magenta("    mw2 before", ctx.action.name));
					//resolve("data from mw2");
					resolve();
				}, 300);
			})
				.then(() => {
					return handler(ctx);
				})
				.then(res => {
					broker.logger.info(kleur.magenta("    mw2 after", ctx.action.name));
					return res;
				});
		};
	}
};


const broker = new ServiceBroker({
    logger:'Console',
    middlewares: [middleware1, middleware2]

})



async function main() {
    try {
        await broker.start()
        broker.repl()
    }
    catch (err) {
        console.log(err)
    }
}
main()