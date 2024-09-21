
<template>
  <Icon :iconName="'heading'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HeadingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'heading'
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
