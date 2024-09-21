
<template>
  <Icon :iconName="'pyramid'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PyramidIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pyramid'
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
