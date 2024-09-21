
<template>
  <Icon :iconName="'pointing-right-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PointingRight07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pointing-right-07'
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
