
<template>
  <Icon :iconName="'mouse-12'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Mouse12Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'mouse-12'
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
