
<template>
  <Icon :iconName="'file-dollar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileDollarIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-dollar'
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
