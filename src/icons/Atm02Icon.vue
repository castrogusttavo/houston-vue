
<template>
  <Icon :iconName="'atm-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Atm02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'atm-02'
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
