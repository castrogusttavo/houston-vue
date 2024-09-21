
<template>
  <Icon :iconName="'blend'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BlendIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blend'
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
