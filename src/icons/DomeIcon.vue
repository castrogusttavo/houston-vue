
<template>
  <Icon :iconName="'dome'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DomeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dome'
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
