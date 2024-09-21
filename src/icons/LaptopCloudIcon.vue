
<template>
  <Icon :iconName="'laptop-cloud'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaptopCloudIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laptop-cloud'
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
