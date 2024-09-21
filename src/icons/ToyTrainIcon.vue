
<template>
  <Icon :iconName="'toy-train'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ToyTrainIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'toy-train'
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
