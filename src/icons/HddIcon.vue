
<template>
  <Icon :iconName="'hdd'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'HddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'hdd'
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
