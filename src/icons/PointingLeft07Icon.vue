
<template>
  <Icon :iconName="'pointing-left-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PointingLeft07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pointing-left-07'
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
