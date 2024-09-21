
<template>
  <Icon :iconName="'layout-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Layout04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'layout-04'
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
