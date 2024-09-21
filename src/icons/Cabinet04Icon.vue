
<template>
  <Icon :iconName="'cabinet-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Cabinet04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cabinet-04'
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
