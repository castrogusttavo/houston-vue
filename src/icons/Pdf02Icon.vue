
<template>
  <Icon :iconName="'pdf-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pdf02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pdf-02'
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
