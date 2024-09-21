
<template>
  <Icon :iconName="'muhammad'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MuhammadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'muhammad'
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
