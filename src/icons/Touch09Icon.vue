
<template>
  <Icon :iconName="'touch-09'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Touch09Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'touch-09'
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
