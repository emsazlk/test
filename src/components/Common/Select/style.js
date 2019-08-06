export default {
  container: (base, state) => {
    return {
      position: 'relative',
      width: '100%',
      maxWidth: '100%',
      display: 'flex',
      alignItems: 'center',
    }
  },
  control: () => {
    return {
      width: '100%',
      height: 'auto',
      position: 'relative'
    }
  },
  valueContainer: () => {
    return {
      padding: 0,
      height: '60px',
      paddingRight: '40px',
      overflow: 'hidden',
    }
  },
  input: () => {
    return {
      margin: 0,
      padding: 0,
    }
  },
  singleValue: () => {
    return {
      margin: 0,
      maxWidth: '100%',
    }
  },
  indicatorSeparator: () => {
    return {
      display: 'none'
    }
  },
  menu: () => {
    return {}
  }
}