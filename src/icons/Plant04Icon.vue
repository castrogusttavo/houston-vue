
<template>
  <Icon :iconName="'plant-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Plant04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'plant-04'
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
