
<template>
  <Icon :iconName="'octagon'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'OctagonIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'octagon'
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
