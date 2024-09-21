
<template>
  <Icon :iconName="'study-lamp'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StudyLampIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'study-lamp'
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
