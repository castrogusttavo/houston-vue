
<template>
  <Icon :iconName="'pinterest'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PinterestIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pinterest'
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
