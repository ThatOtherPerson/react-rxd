/**
 * Created by frank on 7/28/16.
 */
const styles = require('./Button.scss');
export { styles };

const classnames = require('classnames');

export function getButtonClassnameFromProps(props) {
  const { primary, success, warning, info, danger, flat, fullWidth } = props;
  const buttonClass = flat ? styles.btnFlat : styles.btn;
  return classnames({
    [buttonClass]: true,
    [styles.fullWidth]: fullWidth,
    [props.className]: !!props.className,
    primary,
    success,
    warning,
    danger,
    info,
    flat
  });
}
