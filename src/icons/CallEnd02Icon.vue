
<template>
  <Icon :iconName="'call-end-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallEnd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-end-02'
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
