
<template>
  <Icon :iconName="'sun-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Sun02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'sun-02'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
