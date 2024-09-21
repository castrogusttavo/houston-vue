
<template>
  <Icon :iconName="'return-request'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ReturnRequestIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'return-request'
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
