
<template>
  <Icon :iconName="'corn'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CornIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'corn'
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
