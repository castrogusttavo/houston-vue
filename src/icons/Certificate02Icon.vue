
<template>
  <Icon :iconName="'certificate-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Certificate02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'certificate-02'
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
