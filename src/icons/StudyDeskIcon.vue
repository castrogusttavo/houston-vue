
<template>
  <Icon :iconName="'study-desk'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StudyDeskIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'study-desk'
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
