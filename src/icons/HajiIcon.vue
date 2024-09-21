
<template>
  <Icon :iconName="'haji'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HajiIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'haji'
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
