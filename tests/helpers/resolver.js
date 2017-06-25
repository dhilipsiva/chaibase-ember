import Resolver from '../../resolver';
import ENV from 'chaibase/config/environment';

const resolver = Resolver.create();

resolver.namespace = {
  modulePrefix: ENV.modulePrefix,
  podModulePrefix: ENV.podModulePrefix
};

export default resolver;
