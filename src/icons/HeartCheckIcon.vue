
<template>
  <Icon :iconName="'heart-check'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HeartCheckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'heart-check'
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
