
<template>
  <Icon :iconName="'shutterstock'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShutterstockIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shutterstock'
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
