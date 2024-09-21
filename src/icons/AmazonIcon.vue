
<template>
  <Icon :iconName="'amazon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AmazonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'amazon'
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
