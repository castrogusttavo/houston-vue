
<template>
  <Icon :iconName="'presentation-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Presentation02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'presentation-02'
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
