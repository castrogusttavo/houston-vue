
<template>
  <Icon :iconName="'vynil-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Vynil02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vynil-02'
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
