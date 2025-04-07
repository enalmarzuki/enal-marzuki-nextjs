/* eslint-env node */
const path = require('path');
const formatCommand = ['prettier --write .', 'prettier . --check'];

module.exports = {
  '*': formatCommand,
};
