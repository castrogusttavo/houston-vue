
<template>
  <Icon :iconName="'searching'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SearchingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'searching'
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
