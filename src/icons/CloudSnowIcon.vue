
<template>
  <Icon :iconName="'cloud-snow'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CloudSnowIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'cloud-snow'
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
