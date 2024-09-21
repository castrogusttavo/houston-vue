
<template>
  <Icon :iconName="'desk-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Desk02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'desk-02'
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
