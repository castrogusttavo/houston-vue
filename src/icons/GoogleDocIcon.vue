
<template>
  <Icon :iconName="'google-doc'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GoogleDocIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'google-doc'
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
