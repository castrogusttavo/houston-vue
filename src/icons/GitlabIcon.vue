
<template>
  <Icon :iconName="'gitlab'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GitlabIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gitlab'
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
