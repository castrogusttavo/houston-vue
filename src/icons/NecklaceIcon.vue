
<template>
  <Icon :iconName="'necklace'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NecklaceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'necklace'
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
