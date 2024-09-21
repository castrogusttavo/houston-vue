
<template>
  <Icon :iconName="'file-pin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FilePinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-pin'
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
