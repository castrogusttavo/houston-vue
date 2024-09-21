
<template>
  <Icon :iconName="'call-add-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallAdd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-add-02'
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
