
<template>
  <Icon :iconName="'snow'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SnowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'snow'
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
