
<template>
  <Icon :iconName="'conference'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ConferenceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'conference'
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
