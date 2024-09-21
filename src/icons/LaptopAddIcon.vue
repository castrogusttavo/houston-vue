
<template>
  <Icon :iconName="'laptop-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'LaptopAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'laptop-add'
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
