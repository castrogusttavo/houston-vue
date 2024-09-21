
<template>
  <Icon :iconName="'eye'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EyeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'eye'
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
