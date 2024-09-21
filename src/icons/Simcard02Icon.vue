
<template>
  <Icon :iconName="'simcard-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Simcard02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'simcard-02'
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
