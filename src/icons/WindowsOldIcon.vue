
<template>
  <Icon :iconName="'windows-old'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WindowsOldIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'windows-old'
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
