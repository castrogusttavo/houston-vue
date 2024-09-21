
<template>
  <Icon :iconName="'user-minus-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserMinus02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-minus-02'
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
